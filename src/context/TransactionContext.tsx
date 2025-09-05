"use client";
import { createContext, useState, ReactNode, useContext } from "react";

export type TransactionType = {
  id: number;
  type: "income" | "expense";
  description: string;
  amount: number;
};

type TransactionContextType = {
  transactions: TransactionType[];
  addTransaction: (transaction: TransactionType) => void;
};

const TransactionContext = createContext<TransactionContextType>({
  transactions: [],
  addTransaction: () => {},
});

export const useTransactions = () => useContext(TransactionContext);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const addTransaction = (transaction: TransactionType) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <TransactionContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
