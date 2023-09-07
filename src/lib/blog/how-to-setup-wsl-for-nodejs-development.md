---
title: How to set up WSL for NodeJS Development
date: Sep 7, 2023
cover: https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format
excerpt: A tutorial on setting up Windows Subsystem for Linux for NodeJS development on a Windows machine.
---

## Getting Started

### Check build version

Before we begin, ensure that you are using a recent build of Windows 10 or 11. If you are using an earlier version than Build 20262, this will not work!

### Installing WSL

To install Windows Subsystem for Linux, open up Powershell on your PC and enter the below.

```bash
wsl --install
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093436962/e482efb6-4763-4117-9d9d-c77e6c0eeabd.png align="center")

If you run into any issues with this, see the [Troubleshooting Guide](https://learn.microsoft.com/en-us/windows/wsl/troubleshooting).

## Initial Setup

Once WSL has been installed, reboot your computer. This step is important to ensure it is setup completely.

After rebooting, if Ubuntu does not open automatically then open the Ubuntu app from the start menu.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093532770/fdcc68d7-2b99-4386-8ad5-c9555286878b.png align="center")

You will be prompted to set up an account for your Linux system, so go ahead and do this.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093537496/283fdce8-c17a-4717-b8ca-45a99bd3b05a.png align="center")

- Note that when creating a password, nothing will appear on screen. This is called "blind typing" and this is completely normal.
- Once you create an account, this will be your default user and automatically sign-in on launch.
- This account will be considered the Linux administrator, with the ability to run `sudo` administrative commands.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093559745/8325c14f-8419-4a3d-9fc4-c3367adc6a79.png align="center")

### Ensure packages are up to date

It is recommended that you check for package updates after installing. Windows does not update or upgrade these automatically, so to do this manual process you should run:

```bash
sudo apt update && sudo apt upgrade
```

in your ubuntu shell. It will ask for your password and then permission to install.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093613010/57c0cd73-d6ac-4869-b1e6-ecdac74b1f90.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093618196/52644162-7b95-4e57-a834-40a5f811d26c.png align="center")

### Install NodeJS & npm via nvm (Node Version Manager)

It is recommended to use a node version manager when installing NodeJS. The reason for this is that you will likely require different node versions based on the needs of the project you are working on. NVM easily allows us to switch between different versions on the fly.

Open your Ubuntu WSL command line and enter the below command to install cURL, a tool used to donload content from the internet in the command line.

```bash
sudo apt-get install curl
```

Once installed, enter the below to install nvm.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093637978/21e47831-00dc-499a-a666-c778c8e5d283.png align="center")

For this new install to take effect, you're going to need to close the terminal and open a new one.

Now let's install the latest LTS version of node, by entering

```bash
nvm install --lts
```

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093664064/08d1edfe-d252-4552-8518-2687696cabf5.png align="center")

## Setting up VS Code with WSL

### Getting Started

Before starting, make sure you have installed [Visual Studio Code](https://code.visualstudio.com/) to your PC.

Visual Studio Code, along with the WSL extension, enables you to use WSL as your full-time development environment directly from VS Code.

### Installing the Remote Development Extension

Go to the [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) page and press Install. It will prompt you to open Visual Studio Code.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093715977/941e048a-4374-4f7e-ae97-f43446ee835b.png align="center")

This will open Visual Studio Code and here you can press Install.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093723158/ba05cbbe-fba4-4d28-82a6-38d1bf9d5020.png align="center")

### Setting WSL as defualt terminal

Open a terminal window inside VS Code by pressing Terminal -&gt; New Terminal in the toolbar.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093734159/f6837f4c-4d88-4838-8759-67fe30b9b2f9.png align="center")

This should open a powershell terminal. To change the default to your WSL terminal, click the arrow beside the new terminal option, at the top right of the terminal, and choose `Select Default Profile`.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093745978/0ddfa466-e801-4231-881b-887c1ea4d6c7.png align="center")

You are then prompted to select the default profile. Here, choose `Ubuntu (WSL)` as default.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093750934/8b0942cf-a5ad-4e06-aefe-ad12848d8616.png align="center")

Go ahead and open an new terminal, and it will be using WSL as default!

## Using WSL & VSCode

### Running a simple project

Let's try out our new set up and try running a project using Visual Studio Code & Windows Subsystem for Linux.

In this, we will be using the Windows Filesystem to store files, and Windows Subsystem for Linux to run the application using NodeJS.

### Clone a project

Using your favourite Git client, clone the [sveltejs/realworld](https://github.com/sveltejs/realworld) project. We will be using this as an example application to run.

Open up this project's files in Visual Studio Code and open a terminal.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093793520/31855466-5887-4611-a04f-e850133d2d24.png align="center")

### Run the code

In the WSL terminal, enter `npm install` to install the dependencies.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093802486/54b27dea-7b3a-443b-a308-07d4d0c74a04.png align="center")

Enter `npm run dev` and the app should run inside WSL.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093817427/8dec887a-3878-4cf3-b424-a3e06290009c.png align="center")

Visit [http://localhost:5173](http://localhost:5173) in your usual browser and you will be able to access the application in Windows when it is running on the Linux Subsystem!

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1694093822485/3e94b4a3-e1e9-4ad2-aae9-d23a28d1dbc9.png align="center")
