package com.corg.cuentaBancaria;

public class CuentaCorriente extends Cuenta {
	private float sobregiro;

	public CuentaCorriente(float saldo, float tasaAnual) {
		super(saldo, tasaAnual);
		sobregiro = 0;
	}

	public void setSobregiro(float sobregiro) {
		this.sobregiro = sobregiro;
	}

	public float getSobregiro() {
		return sobregiro;
	}

	@Override
	public void retirar(float cantidad) {
		float saldoActual = getSaldo() + sobregiro;
		if (cantidad > saldoActual) {
			sobregiro = cantidad - saldoActual;
			super.retirar(saldoActual);
		} else {
			super.retirar(cantidad);
		}
	}

	@Override
	public void consignar(float cantidad) {
		if (sobregiro > 0) {
			if (cantidad <= sobregiro) {
				sobregiro -= cantidad;
			} else {
				super.consignar(cantidad - sobregiro);
				sobregiro = 0;
			}
		} else {
			super.consignar(cantidad);
		}
	}

	@Override
	public void extractoMensual() {
		super.extractoMensual();
		System.out.println("Número de transacciones: " + (numConsignaciones + numRetiros));
		System.out.println("Comisión mensual: " + comisionMensual);
		System.out.println("Sobregiro: " + sobregiro);
	}
}
