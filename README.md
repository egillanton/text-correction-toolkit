<h1 align="center">
Text Correction Toolkit
</h1>

<img src="https://user-images.githubusercontent.com/9976294/73755171-89f09f00-475d-11ea-9615-4a43ec4d522d.png" alt="Screenshot" align="center"/>



## Table of Contents
<!-- ⛔️ MD-MAGIC-EXAMPLE:START (TOC:collapse=true&collapseText=Click to expand) -->
<details>
<summary>Click to expand</summary>

1. [Introduction](#1-introduction)
2. [Setup](#2-setup)
3. [License](#3-license)
4. [References](#4-references)

</details>
<!-- ⛔️ MD-MAGIC-EXAMPLE:END -->


## 1 Introduction
This is a frontend tool used for text correction on extracted OCR text from images. Runs on top of a Flask Micro-Web Server

## 2 Setup

### Install Python 3.8
Run the following commands as root or user with sudo access to update the packages list and install the prerequisites:

```bash
sudo apt update
sudo apt install software-properties-common
```

Add the deadsnakes PPA to your system’s sources list:

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```
When prompted press Enter to continue:

```bash
Press [ENTER] to continue or Ctrl-c to cancel adding it.
```

Once the repository is enabled, install Python 3.8 with:

```bash
sudo apt install python3.8
```

Verify that the installation was successful by typing:

```bash
python3.8 --version
```

### Create Virtual Enviroment

Create
```bash
virtualenv -p /usr/bin/python3.8 venv
```

Activate
```bash
. venv/bin/activate
```

Install Packages
```bash
pip install -r requirements.txt
```

Set Enviroment Variables
```bash
export FLASK_APP=app
export FLASK_ENV=development
export FLASK_DEBUG=1
```

## Run Server
```bash
flask run
````

## 3. License
This project is licensed under the GNU General Public License, Version 3.0 - see the [LICENSE](LICENSE) file for details.

## 4. References
* [egillanton/flask-receipt-scanner](https://github.com/egillanton/flask-receipt-scanner)
* [enyo/dropzone/](https://github.com/enyo/dropzone/)


<p align="center">
🌟 PLEASE STAR THIS REPO IF YOU FOUND SOMETHING INTERESTING 🌟
</p>