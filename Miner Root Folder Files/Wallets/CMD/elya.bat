TITLE MultiMiner - Elyacoin Wallet
echo off
bitsadmin.exe /transfer "Elyacoin Wallet" http://update.multiminer.us/CMUpdate/Wallets/Elyacoin.zip C:\Miner\Wallets\Elyacoin.zip
cls
echo.
echo.
echo  Installing Elyacoin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Elyacoin.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Elyacoin\Elyacoin.exe
exit