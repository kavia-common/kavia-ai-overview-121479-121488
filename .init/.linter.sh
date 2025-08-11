#!/bin/bash
cd /home/kavia/workspace/code-generation/kavia-ai-overview-121479-121488/frontend_kavia_ai
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

