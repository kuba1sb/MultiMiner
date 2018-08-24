TITLE MultiMiner - Raven Coin Wallet
echo off
bitsadmin.exe /transfer "Raven Coin Wallet" http://update.multiminer.us/CMUpdate/Wallets/RVN.zip C:\Miner\Wallets\RVN.zip
cls
echo.
echo.
echo  Installing Raven Coin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\RVN.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\RVN\raven-qt.exe
exit