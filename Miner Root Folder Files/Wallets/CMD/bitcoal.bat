TITLE MultiMiner - BitCoal Wallet
echo off
bitsadmin.exe /transfer "BitCoal Wallet" http://update.multiminer.us/CMUpdate/Wallets/BitCoal.zip C:\Miner\Wallets\BitCoal.zip
cls
echo.
echo.
echo  Installing BitCoal Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\BitCoal.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\BitCoal\BitCoalWallet-x64.exe
exit