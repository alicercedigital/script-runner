# 🚀 Script Runner

A lightweight, interactive CLI utility for **Bun** projects. Organize, discover, and execute scripts without cluttering your `package.json`.

## ✨ Features

*   **Interactive TUI:** Distinct selection menu powered by `inquirer`.
*   **Auto-Discovery:** Automatically finds scripts in `./scripts` or `./src/scripts`.
*   **⚡ Instant Setup:** Scaffold a scripts directory and demo file with one command.
*   **Flexible Organization:** Supports flat files or modular folders with entry points.
*   **Bun Native:** Fast startup and execution using Bun's runtime.

## 📦 Installation

```bash
bun add -D @alicercedigital/runner

# For global usage
bun add -g @alicercedigital/runner
# Now you can run the command as 'runner' from any directory
```

## ⚡ Quick Start

Setting up for the first time? Initialize your project to create the necessary folders and an example script:

```bash
bun runner init
```

## 🛠 Usage

### Interactive Mode
Run the runner without arguments to launch the interactive selection menu:

```bash
bun runner
# or
bun x @alicercedigital/runner
```

### Direct Execution
Run a specific script by name, bypassing the menu:

```bash
bun runner -s my-script
```

### List Available Scripts
See what scripts are detected without running them:

```bash
bun runner --list
```

## 📂 Organizing Your Scripts

The runner automatically scans `./scripts` and `./src/scripts`. It supports two patterns:

### 1. Flat Files (Simple)
Place `.ts` or `.js` files directly in the scripts directory.
*   **Script Name:** The filename (minus extension).
*   **Ignored:** Files starting with `_` (e.g., `_helper.ts`).

### 2. Directories (Modular)
Create a folder containing a `_main.ts` file. Useful for scripts that need their own local utilities.
*   **Script Name:** The folder name.
*   **Requirement:** Must contain `_main.ts`.

### Example Structure

```text
my-project/
├── scripts/
│   ├── seed-db.ts           # Runnable as "seed-db"
│   ├── _utils.ts            # Ignored (starts with _)
│   └── deploy/              # Runnable as "deploy"
│       ├── _main.ts         # Entry point required
│       └── config.ts        # Helper file
├── package.json
└── bun.lockb
```

## ⚙️ CLI Options

| Option | Alias | Description |
| :--- | :--- | :--- |
| `init` | `-i` | Initialize the scripts directory and a demo file. |
| `--script <name>` | `-s` | Run a specific script directly by name. |
| `--path <dir>` | `-p` | Look for scripts in a custom directory. |
| `--list` | `-l` | List all discovered scripts and exit. |
| `--verbose` | `-v` | Enable detailed logging. |
| `--help` | `-h` | Show help message. |

## 🧩 Passing Arguments

Any arguments passed after the script command are forwarded to the child process.

```bash
# Runs 'seed-db' script and passes '--force' to it
bun runner -s seed-db -- --force
```

## 📜 License

MIT