#!/bin/bash

# GitHub Labels Setup Script
# Uses GitHub CLI (gh) to create labels from labels.json
# Usage: ./create-labels.sh [owner/repo]

set -e

# Default repo (or pass as first argument)
REPO="${1:-thibaudcolas/draftail.org}"

# Check if gh is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Install it from: https://cli.github.com/"
    exit 1
fi

# Check if jq is installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is not installed."
    echo "Install it with: brew install jq"
    exit 1
fi

# Check if labels.json exists
if [ ! -f "labels.json" ]; then
    echo "Error: labels.json not found in current directory"
    exit 1
fi

echo "Creating labels for repository: $REPO"
echo "---"

# Read labels from JSON and create them
jq -c '.[]' labels.json | while read -r label; do
    NAME=$(echo "$label" | jq -r '.name')
    COLOR=$(echo "$label" | jq -r '.color')
    DESCRIPTION=$(echo "$label" | jq -r '.description')
    
    echo "Creating label: $NAME"
    
    # Try to create the label, ignore if it already exists
    gh label create "$NAME" \
        --repo "$REPO" \
        --color "$COLOR" \
        --description "$DESCRIPTION" \
        2>/dev/null && echo "  ✓ Created" || echo "  ℹ Already exists (skipped)"
done

echo "---"
echo "Done! All labels processed."
echo ""
echo "To view labels, run: gh label list --repo $REPO"
