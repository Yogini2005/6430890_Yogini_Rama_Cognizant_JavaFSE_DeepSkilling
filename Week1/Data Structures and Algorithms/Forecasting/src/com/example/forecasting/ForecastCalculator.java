package com.example.forecasting;

public class ForecastCalculator {
	public static double calculateFutureValue(double initialValue,double growthRate,int years) {
		if(years==0) {
			return initialValue;
		}
		return calculateFutureValue(initialValue,growthRate,years-1)*(1+growthRate);
	}
	public static void main(String[] args) {
		double initialValue=1000;
		double growthRate=0.05;
		int years=10;
		double result=calculateFutureValue(initialValue,growthRate,years);
		System.out.printf("Predicted future value after %d years:₹%.2f%n",years,result);
		
	}

}
