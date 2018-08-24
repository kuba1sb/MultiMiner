TITLE MultiMiner - Ombre Wallet
echo off
bitsadmin.exe /transfer "Ombre Wallet" http://update.multiminer.us/CMUpdate/Wallets/OMB.zip C:\Miner\Wallets\OMB.zip
cls
echo.
echo.
echo  Installing Ombre Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\OMB.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\OMB\wallet.exe
exit