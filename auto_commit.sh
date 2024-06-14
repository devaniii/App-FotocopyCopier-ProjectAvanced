#!/bin/bash

while true; do
    git add .
    git commit -m "Auto-commit: $(date)"
    git push origin master
    sleep 300  # Esperar 5 minutos
done

