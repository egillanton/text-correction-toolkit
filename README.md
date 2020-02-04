# Text Correction Toolkit  


## Setup
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