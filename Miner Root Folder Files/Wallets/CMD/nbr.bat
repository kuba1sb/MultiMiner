TITLE MultiMiner - Niobio Wallet
echo off
bitsadmin.exe /transfer "Niobio Wallet" http://update.multiminer.us/CMUpdate/Wallets/NBR.zip C:\Miner\Wallets\NBR.zip
cls
echo.
echo.
echo  Installing Niobio Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\NBR.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\NBR\niobio.exe
exit