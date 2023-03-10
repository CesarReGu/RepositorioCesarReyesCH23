package com.corg.cuentaBancaria;

public class CuentaDeAhorros extends Cuenta {

	private boolean activa;
	
	// Constructor que hereda y verifica si esta activa la cuenta
	
	public CuentaDeAhorros(float saldoInicial, float tasaAnual) {
		super(saldoInicial, tasaAnual);
		this.activa = saldoInicial >= 10000;
	}

	// Método para agregar dinero solo si la cuenta esta activa
	public void consignar(float valor) {
		if (this.activa) {
			super.consignar(valor);
		} else {
			System.out.println("No se puede consignar en una cuenta inactiva");
		}
	}
	
	// Método para retirar dinero solo si la cuenta esta activa
	public void retirar(float valor) {
		if (this.activa) {
			super.retirar(valor);
		} else {
			System.out.println("No se puede retirar de una cuenta inactiva");
		}
	}

	// Método para resumen de actividad mensual, si retiras mas de 4 veces te meten multa de 1000
	public void extractoMensual() {
		if (numRetiros > 4) {
			super.saldo -= 1000 * (numRetiros - 4);
		}
		super.extractoMensual();
		this.activa = super.saldo >= 10000;
		System.out.println("Número de transacciones: " + (numConsignaciones + numRetiros));
		System.out.println("Comisión mensual: " + comisionMensual);
		System.out.println("Saldo: " + super.saldo);
	}

	public void imprimir() {
		System.out.println("Número de transacciones: " + (numConsignaciones + numRetiros));
		System.out.println("Comisión mensual: " + comisionMensual);
		System.out.println("Saldo: " + super.saldo);
	}

}
