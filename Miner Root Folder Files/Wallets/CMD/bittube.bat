TITLE MultiMiner - BitTube Wallet
echo off
bitsadmin.exe /transfer "BitTube Wallet" http://update.multiminer.us/CMUpdate/Wallets/IPBC.zip C:\Miner\Wallets\IPBC.zip
cls
echo.
echo.
echo  Installing BitTube Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\IPBC.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\IPBC\IPBC-Wallet.exe
exit