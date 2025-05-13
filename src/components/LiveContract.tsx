import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Wallet, ArrowRight, ShieldCheck } from "lucide-react";

const ESCROW_CONTRACT_ABI = [
  "function deposit() public payable",
  "function release() public",
  "function balance() public view returns (uint256)",
  "event Deposited(address indexed depositor, uint256 amount)",
  "event Released(address indexed to, uint256 amount)",
];

const ESCROW_CONTRACT_BYTECODE =
  "0x608060405234801561001057600080fd5b50610487806100206000396000f3fe60806040526004361061002d5760003560e01c80632e1a7d4d14610039578063d0e30db01461005f57610034565b3661003457005b600080fd5b34801561004557600080fd5b5061005d6004803603810190610058919061027d565b610069565b005b610067610134565b005b6000610073610193565b90506000811161008457600080fd5b806000808282546100959190610309565b925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156100de573d6000803e3d6000fd5b507f9c6c5895a93d262c2945b2e5d865ccb01d36f9d4e54a44e5aafd2c07fe425e3d3382604051610110929190610282565b60405180910390a1806000808282546101299190610309565b92505081905550505b565b346000808282546101459190610360565b925050819055507f90890809c654f11d6e72a28fa60149770a0d11ec6c92319d6ceb2bb0a4ea1a15336000546040516101819291906102ab565b60405180910390a1565b60008060005490508091505090565b6000813590506101b081610423565b92915050565b6000819050919050565b6101c9816101b6565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff169050919050565b60006101fc826101cf565b9050919050565b61020c816101f1565b82525050565b6000604082019050610227600083018561020c565b61023460208301846101c0565b9392505050565b60006020828403121561024d57600080fd5b600061025b848285016101a1565b91505092915050565b61026d816101b6565b82525050565b61027c816101f1565b82525050565b60006040820190506102976000830185610273565b6102a46020830184610264565b9392505050565b60006040820190506102c06000830185610273565b6102cd6020830184610264565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061030e826101b6565b9150610319836101b6565b92508282039050818111156103315761033061027d565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600061036b826101b6565b9150610376836101b6565b925082820261038481610337565b91508282048414831517610399576103986102d3565b5b5092915050565b6103a8816101f1565b81146103b357600080fd5b50565b6000813590506103c58161039f565b92915050565b6000602082840312156103dd57600080fd5b60006103eb848285016103b6565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610460602683610413565b915061046b82610424565b604082019050919050565b6000602082019050818103600083015261048f81610453565b905091905056fea2646970667358221220d849f96f3086b9f82cdcf665c3ee885b898e08d0b9c7b16e8f6cd3a1637f3c2264736f6c63430008000033";

const LiveContract = () => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [amount, setAmount] = useState<string>("0.1");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const initializeEthereum = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const accounts = await provider.send("eth_requestAccounts", []);
          const signer = await provider.getSigner();

          // Deploy the contract
          const factory = new ethers.ContractFactory(
            ESCROW_CONTRACT_ABI,
            ESCROW_CONTRACT_BYTECODE,
            signer
          );

          const contract = await factory.deploy();
          await contract.waitForDeployment();

          setProvider(provider);
          setContract(contract);
          setAccount(accounts[0]);

          // Listen for account changes
          window.ethereum.on("accountsChanged", (accounts: string[]) => {
            setAccount(accounts[0]);
          });
        } catch (error) {
          console.error("Error initializing ethereum:", error);
          setStatus("Failed to connect to wallet");
        }
      } else {
        setStatus("Please install MetaMask to interact with the contract");
      }
    };

    initializeEthereum();
  }, []);

  const updateBalance = async () => {
    if (contract) {
      try {
        const balance = await contract.balance();
        setBalance(ethers.formatEther(balance));
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    }
  };

  const handleDeposit = async () => {
    if (contract && amount) {
      try {
        setStatus("Depositing...");
        const tx = await contract.deposit({
          value: ethers.parseEther(amount),
        });
        await tx.wait();
        setStatus("Deposit successful!");
        updateBalance();
      } catch (error) {
        console.error("Error depositing:", error);
        setStatus("Deposit failed");
      }
    }
  };

  const handleRelease = async () => {
    if (contract) {
      try {
        setStatus("Releasing funds...");
        const tx = await contract.release();
        await tx.wait();
        setStatus("Funds released successfully!");
        updateBalance();
      } catch (error) {
        console.error("Error releasing funds:", error);
        setStatus("Release failed");
      }
    }
  };

  return (
    <section
      id="live-contract"
      className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Live Smart Contract Demo
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Interact with a real smart contract on the blockchain.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          {!account ? (
            <div className="text-center">
              <Wallet className="mx-auto h-16 w-16 text-indigo-600 dark:text-indigo-400 mb-4" />
              <p className="text-gray-600 dark:text-gray-300">
                {status || "Connect your wallet to interact with the contract"}
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Connected Wallet
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {account}
                  </p>
                </div>
                <ShieldCheck className="h-6 w-6 text-green-500" />
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                    Contract Balance
                  </h4>
                  <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                    {balance} ETH
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Amount (ETH)
                    </label>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 dark:bg-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="0.1"
                      step="0.01"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button
                      onClick={handleDeposit}
                      className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center"
                    >
                      Deposit
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <button
                      onClick={handleRelease}
                      className="flex-1 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                      Release Funds
                    </button>
                  </div>
                </div>
              </div>

              {status && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    status.includes("successful")
                      ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
                      : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200"
                  }`}
                >
                  {status}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveContract;
