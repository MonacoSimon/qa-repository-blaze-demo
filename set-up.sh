#!/bin/bash

echo "========================================="
echo "QA BlazeDemo - Environment Verification"
echo "========================================="

echo ""
echo "Verificando Node.js..."

if command -v node &> /dev/null
then
    echo "Node.js encontrado"
else
    echo "ERROR: Node.js no está instalado"
    echo "Instalar con:"
    echo "sudo apt install nodejs"
fi

echo ""
echo "Verificando npm..."

if command -v npm &> /dev/null
then
    echo "npm encontrado"
else
    echo "ERROR: npm no está instalado"
    echo "Instalar con:"
    echo "sudo apt install npm"
fi

echo ""
echo "Verificando Java..."

if command -v java &> /dev/null
then
    echo "Java encontrado"
else
    echo "ERROR: Java no está instalado"
    echo "Instalar con:"
    echo "sudo apt install default-jdk"
fi

echo ""
echo "Verificando Newman..."

if command -v newman &> /dev/null
then
    echo "Newman encontrado"
else
    echo "WARNING: Newman no está instalado"
    echo "Instalar con:"
    echo "npm install -g newman"
fi

echo ""
echo "Verificando Lighthouse..."

if command -v lighthouse &> /dev/null
then
    echo "Lighthouse encontrado"
else
    echo "WARNING: Lighthouse no está instalado"
    echo "Instalar con:"
    echo "npm install -g lighthouse"
fi

echo ""
echo "Verificando Cypress..."

if [ -d "automation/cypress/node_modules" ]
then
    echo "Dependencias de Cypress encontradas"
else
    echo "WARNING: Dependencias de Cypress no encontradas"
    echo "Instalar con:"
    echo "cd automation/cypress"
    echo "npm install"
fi

echo ""
echo "========================================="
echo "Verificación finalizada"
echo "========================================="

echo ""
echo "Para ejecutar este script:"
echo ""
echo "chmod +x set-up.sh"
echo "./set-up.sh"