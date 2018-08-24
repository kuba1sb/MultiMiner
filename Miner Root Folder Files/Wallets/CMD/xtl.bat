TITLE MultiMiner - Stellite Wallet
echo off
bitsadmin.exe /transfer "Stellite Wallet" http://update.multiminer.us/CMUpdate/Wallets/XTL.zip C:\Miner\Wallets\XTL.zip
cls
echo.
echo.
echo  Installing Stellite Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\XTL.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\XTL\Stellite-Wallet-GUI.exe
exit