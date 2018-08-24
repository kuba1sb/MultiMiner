TITLE MultiMiner - Iridium Wallet
echo off
bitsadmin.exe /transfer "Iridium Wallet" http://update.multiminer.us/CMUpdate/Wallets/IRD.zip C:\Miner\Wallets\IRD.zip
cls
echo.
echo.
echo  Installing Iridium Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\IRD.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\IRD\Iridium_Wallet.exe
exit