TITLE MultiMiner - Alloy Wallet
echo off
bitsadmin.exe /transfer "Alloy Wallet" http://update.multiminer.us/CMUpdate/Wallets/Alloy.zip C:\Miner\Wallets\Alloy.zip
cls
echo.
echo.
echo  Installing Alloy Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Alloy.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
C:\Miner\Wallets\Alloy\AlloyWallet.exe
exit