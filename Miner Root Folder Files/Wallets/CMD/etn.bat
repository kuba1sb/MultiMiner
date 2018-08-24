TITLE MultiMiner - Electroneum Wallet
echo off
bitsadmin.exe /transfer "Electroneum Wallet" http://update.multiminer.us/CMUpdate/Wallets/ETN.zip C:\Miner\Wallets\ETN.zip
cls
echo.
echo.
echo  Installing Electroneum Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\ETN.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\ETN\ElectroneumGUIWallet.exe
exit