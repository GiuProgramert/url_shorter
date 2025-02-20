#!/bin/bash

# Salir en caso de error
set -e

echo "Aplicando migraciones..."
python manage.py migrate

echo "Iniciando el servidor..."
exec "$@"
