package com.ojas.bms.dao;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

import com.ojas.bms.model.Bank;

class InsufficientFundsException extends RuntimeException {
	InsufficientFundsException(String msg) {
		super(msg);
	}
}

public class BankDaoImplementation implements BankDao {
	public static List<Bank> originalList = new ArrayList<Bank>();
	public static List<Bank> tempList = new ArrayList<Bank>();
	Scanner s = new Scanner(System.in);
	Bank bank = null;
	int count = 0;

	public void currentAccount()  {
		int n = 1;
		while (n == 1) {
			bank = new Bank();

			// Bank bank1=new Bank(1234,"sr",7689,1000);

			System.out.println("your account type is:current account");
			System.out.println("enter account name");
			String name = s.next();
			while (!Pattern.matches("[A-Z][a-z]*", name)) {
				System.out.println("enter characters only with first character as capital letter");
				name = s.next();
			}
			bank.setAccountHolderName(name);
			System.out.println("enter account number");
			String accountNo=s.next();
			while(!Pattern.matches("[1]{2}[0-9]{10}", accountNo)){
				System.out.println("enter valid account number");
				accountNo=s.next();
			}
			long accountNum=Long.parseLong(accountNo);
			bank.setAccountNum(accountNum);
			System.out.println("enter mobile number");
			String number = s.next();
			while (!Pattern.matches("[9876][0-9]{9}", number)) {
				System.out.println("Please enter valid mobile number with 10-digits");
				number = s.next();
			}
			long mobNum = Long.parseLong(number);
			bank.setMobileNum(mobNum);
			System.out.println("Do you want to add more accounts press 1 else any number");
			n = s.nextInt();
			originalList.add(bank);
			
			 //originalList.add(bank1);

			System.out.println("total accounts you have added " + (++count));
		}
		System.out.println("account added successfully");
	}

	public void savingsAccount() {
		int n = 1;
		while (n == 1) {
			bank = new Bank();
			System.out.println("your account type is:savings account");
			System.out.println("enter account name");
			String name = s.next();
			while (!Pattern.matches("[A-Z][a-z]*", name)) {
				System.out.println("enter characters only with first character as capital letter");
				name = s.next();
			}
			bank.setAccountHolderName(name);
			System.out.println("enter account number");
			String accountNo=s.next();
			while(!Pattern.matches("[1]{2}[0-9]{10}", accountNo)){
				System.out.println("enter valid account number");
				accountNo=s.next();
			}
			long accountNum=Long.parseLong(accountNo);
			bank.setAccountNum(accountNum);
			String number = s.next();
			while (!Pattern.matches("[9876][0-9]{9}", number)) {
				System.out.println("Please enter valid mobile number with 10-digits");
				number = s.next();
			}
			long mobNum = Long.parseLong(number);
			bank.setMobileNum(mobNum);
			System.out.println("Do you want to add more accounts press 1 else any number");
			n = s.nextInt();
			originalList.add(bank);
			System.out.println("total accounts you have added " + (++count));
		}

	}

	public List<Bank> searchAccount(long accountNum) {
		List<Bank> account1= originalList.stream().filter(account->account.getAccountNum()==accountNum)
				                                  .collect(Collectors.toList());
		return account1;
	}

	public List<Bank> viewAllAccounts() {
		return originalList;

	}

	public void deleteAccount(long accountNum) {
		boolean type=false;
		for(Bank acc:originalList){
			if(acc.getAccountNum()==accountNum){
				type=true;
			}
		}
		if(type){
		tempList = new ArrayList<Bank>();
		tempList = originalList.stream().filter(account -> account.getAccountNum() != accountNum)
				                        .collect(Collectors.toList());
		originalList = new ArrayList<Bank>();
		for (Bank updateAccount : tempList) {
			originalList.add(updateAccount);
		}
		System.out.println("Account deleted successfully....");

	}else
		System.out.println("account is not created yet or account is already deleted");
	}
	public void deposit() {
		if(originalList.isEmpty()){
			System.err.println("list is empty");
		}else{
		System.out.println("enter account number");
		long accountNum = s.nextLong();

		tempList = new ArrayList<Bank>();
		for (Bank updateAccount : originalList) {
			if (updateAccount.getAccountNum() == accountNum) {
				System.out.println("enter the money you want to deposit");
				int money = s.nextInt();
				double balance = updateAccount.getBalance() + money;

				updateAccount.setBalance(balance);
			}
			tempList.add(updateAccount);
		}
		}
		originalList = new ArrayList<Bank>();
		originalList=tempList.stream().collect(Collectors.toList());
		}

	public void withdraw() {
		System.out.println("enter account number");
		long accountNum = s.nextLong();

		tempList = new ArrayList<Bank>();
		for (Bank updateAccount : originalList) {
			if (updateAccount.getAccountNum() == accountNum) {
				System.out.println("enter the money you want to withdraw");
				int money = s.nextInt();
				if(money==0){
					System.out.println("please enter money");}
				else{
				double balance = updateAccount.getBalance();
				if (balance != 0) {
					if(balance>=money){
					balance -= money;
					updateAccount.setBalance(balance);}
					else
						try {
							throw new InsufficientFundsException("you have insufficient balance");
						} catch (Exception e) {
							
							System.out.println("you have insufficient funds");
						}
				} else
					try {
						throw new InsufficientFundsException("you have zero balance");
					} catch (Exception e) {
						System.out.println(
								"you have zero balance .Please check the balance before withdrawing the money.");

					}
					}
			}
			tempList.add(updateAccount);
		}
		originalList = new ArrayList<Bank>();
		originalList=tempList.stream().collect(Collectors.toList());
	}

	public void checkBalance() {
		System.out.println("enter account number");
		long accountNum = s.nextLong();
		originalList.stream().filter(account->account.getAccountNum()==accountNum)
		                     .forEach(account -> System.out.println(account.getBalance()));
		

	}

	
}

