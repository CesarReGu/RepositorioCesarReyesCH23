package com.corg.cuentaBancaria;

public class Cuenta {
	protected float saldo, tasaAnual, comisionMensual;
	protected int numConsignaciones;
	protected int numRetiros;

	// Constructor saldoInicial y tasaAnual
	public Cuenta(float saldoInicial, float tasaAnual) {
		this.saldo = saldoInicial;
		this.tasaAnual = tasaAnual;
	}
	
	// Método para consignar(agregar dinero)
	public void consignar(float cantidad) {
		saldo += cantidad;
		numConsignaciones++;
	}
	
	// Método para retirar dinero
	public void retirar(float cantidad) {
		if (cantidad <= saldo) {
			saldo -= cantidad;
			numRetiros++;
		} else {
			System.out.println("Error: No se puede retirar más dinero del que hay en la cuenta.");
		}
	}
	
	// Método que calcula el interes y lo suma a la cuenta
	public void calcularInteresMensual() {
		float interesMensual = saldo * tasaAnual / 12 / 100;
		saldo += interesMensual;
	}
	
	// Método para dar un resumen de la cuenta
	public void extractoMensual() {
		saldo -= comisionMensual;
		calcularInteresMensual();
		numConsignaciones = 0;
		numRetiros = 0;
		comisionMensual = 0;
	}

	public void imprimir() {
		System.out.println("Saldo: " + saldo);
		System.out.println("Número de consignaciones: " + numConsignaciones);
		System.out.println("Número de retiros: " + numRetiros);
		System.out.println("Tasa anual: " + tasaAnual);
		System.out.println("Comisión mensual: " + comisionMensual);
	}

	// get y set inicio
	public float getSaldo() {
		return saldo;
	}

	public void setSaldo(float saldo) {
		this.saldo = saldo;
	}

	public float getTasaAnual() {
		return tasaAnual;
	}

	public void setTasaAnual(float tasaAnual) {
		this.tasaAnual = tasaAnual;
	}

	public float getComisionMensual() {
		return comisionMensual;
	}

	public void setComisionMensual(float comisionMensual) {
		this.comisionMensual = comisionMensual;
	}

	public int getNumConsignaciones() {
		return numConsignaciones;
	}

	public void setNumConsignaciones(int numConsignaciones) {
		this.numConsignaciones = numConsignaciones;
	}

	public int getNumRetiros() {
		return numRetiros;
	}

	public void setNumRetiros(int numRetiros) {
		this.numRetiros = numRetiros;
	}
	// get y set fin
}
