TITLE MultiMiner - Lines Wallet
echo off
bitsadmin.exe /transfer "Lines Wallet" http://update.multiminer.us/CMUpdate/Wallets/Lines.zip C:\Miner\Wallets\Lines.zip
cls
echo.
echo.
echo  Installing Lines Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\Lines.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\Lines\Lines.exe
exit