package com.ojas.bms.dao;

import java.util.List;

import com.ojas.bms.model.Bank;

public interface BankDao {
	   public void currentAccount();
	   public void savingsAccount();
	   public List<Bank> searchAccount(long accountNum);
	   public List<Bank> viewAllAccounts();
	   public void deleteAccount(long accountNum);
	   public void deposit();
	   public void withdraw();
	   public void checkBalance();
}

