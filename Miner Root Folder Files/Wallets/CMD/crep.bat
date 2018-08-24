TITLE MultiMiner - Crep Wallet
echo off
bitsadmin.exe /transfer "Crep Wallet" http://update.multiminer.us/CMUpdate/Wallets/Crep.zip C:\Miner\Wallets\Crep.zip
cls
echo.
echo.
echo  Installing Crep Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Crep.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Crep\CREPGUI.exe
exit