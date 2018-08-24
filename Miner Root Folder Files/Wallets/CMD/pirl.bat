TITLE MultiMiner - Pirl Wallet
echo off
bitsadmin.exe /transfer "Pirl Wallet" http://update.multiminer.us/CMUpdate/Wallets/Pirl.zip C:\Miner\Wallets\Pirl.zip
cls
echo.
echo.
echo  Installing PluraCoin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Pirl.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Pirl\Pirl-Nautilus-Wallet.exe
exit