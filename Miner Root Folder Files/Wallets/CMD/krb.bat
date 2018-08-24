TITLE MultiMiner - Karbowanec Wallet
echo off
bitsadmin.exe /transfer "Karbowanec Wallet" http://update.multiminer.us/CMUpdate/Wallets/KRB.zip C:\Miner\Wallets\KRB.zip
cls
echo.
echo.
echo  Installing Karbowanec Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\KRB.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\KRB\karbowanec.exe
exit