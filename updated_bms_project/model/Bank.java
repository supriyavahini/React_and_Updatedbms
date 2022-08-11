package com.ojas.bms.model;

public class Bank {
	private long accountNum;
	private String accountHolderName;
	private long mobileNum;
	private double balance;
	public Bank(){}

	public Bank(long accountNum, String accountHolderName, long mobileNum, double balance) {
		this.accountNum = accountNum;
		this.accountHolderName = accountHolderName;
		this.mobileNum = mobileNum;
		this.balance = balance;
	}

	public long getAccountNum() {
		return accountNum;
	}

	public void setAccountNum(long l) {
		this.accountNum = l;
	}

	public String getAccountHolderName() {
		return accountHolderName;
	}

	public void setAccountHolderName(String accountHolderName) {
		this.accountHolderName = accountHolderName;
	}

	public long getMobileNum() {
		return mobileNum;
	}

	public void setMobileNum(long mobileNum) {
		this.mobileNum = mobileNum;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double currentBalance) {
		this.balance = currentBalance;
	}

	public String toString(){
		return accountHolderName+"\t"+accountNum+"\t"+mobileNum+"\t"+balance;
	}
	
	
}
