TITLE MultiMiner - Dero Wallet
echo off
bitsadmin.exe /transfer "Dero Wallet" http://update.multiminer.us/CMUpdate/Wallets/Dero.zip C:\Miner\Wallets\Dero.zip
cls
echo.
echo.
echo  Installing Dero Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Dero.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Dero\dero.cmd
exit