#!/bin/bash
cd /home/kavia/workspace/code-generation/tic-tac-toe-mobile-app-244261-244275/backend
npm run lint
LINT_EXIT_CODE=$?
if [ $LINT_EXIT_CODE -ne 0 ]; then
  exit 1
fi

