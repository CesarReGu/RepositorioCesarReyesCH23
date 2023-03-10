package com.corg.cuentaBancaria;

import java.util.Scanner;

public class MainCuenta {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		Cuenta cuenta = null;
		int opcion;

		do {
			System.out.println("\nMENU");
			System.out.println("1. Crear una nueva cuenta de ahorros");
			System.out.println("2. Crear una nueva cuenta corriente");
			System.out.println("3. Consignar a una cuenta");
			System.out.println("4. Retirar de una cuenta");
			System.out.println("5. Calcular el extracto mensual de una cuenta");
			System.out.println("6. Salir del programa");
			System.out.print("\nElija una opción: ");

			opcion = sc.nextInt();

			switch (opcion) {
			case 1:
				System.out.print("Ingrese el saldo inicial: ");
				float saldoInicial = sc.nextFloat();
				System.out.print("Ingrese la tasa anual: ");
				float tasaAnual = sc.nextFloat();
				cuenta = new CuentaDeAhorros(saldoInicial, tasaAnual);
				System.out.println("Cuenta de ahorros creada.");
				break;
			case 2:
				System.out.print("Ingrese el saldo inicial: ");
				saldoInicial = sc.nextFloat();
				System.out.print("Ingrese la tasa anual: ");
				tasaAnual = sc.nextFloat();
				cuenta = new CuentaCorriente(saldoInicial, tasaAnual);
				System.out.println("Cuenta corriente creada.");
				break;
			case 3:
				if (cuenta != null) {
					System.out.print("Ingrese la cantidad a consignar: ");
					float cantidad = sc.nextFloat();
					cuenta.consignar(cantidad);
					System.out.println("Gracias por su consignación.");
				} else {
					System.out.println("Debe crear una cuenta primero.");
				}
				break;
			case 4:
				if (cuenta != null) {
					System.out.print("Ingrese la cantidad a retirar: ");
					float cantidad = sc.nextFloat();
					cuenta.retirar(cantidad);
					System.out.println("Gracias por su retiro.");
				} else {
					System.out.println("Debe crear una cuenta primero.");
				}
				break;
			case 5:
				if (cuenta != null) {
					cuenta.extractoMensual();
					System.out.println("Extracto mensual calculado.");
				} else {
					System.out.println("Debe crear una cuenta primero.");
				}
				break;
			case 6:
				System.out.println("Gracias por usar nuestro banco.");
				break;
			default:
				System.out.println("Favor de ingresar una opción valida.");
				break;
			}
		} while (opcion != 6);

	}

}
