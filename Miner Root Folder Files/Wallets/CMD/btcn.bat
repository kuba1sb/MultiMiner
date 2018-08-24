TITLE MultiMiner - Bitcoin-N Wallet
echo off
bitsadmin.exe /transfer "Bitcoin-N Wallet" http://update.multiminer.us/CMUpdate/Wallets/BTCN.zip C:\Miner\Wallets\BTCN.zip
cls
echo.
echo.
echo  Installing Conceal Network Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\BTCN.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\BTCN\BitcoinnovaWallet-GUI.exe
exit