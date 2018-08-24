TITLE MultiMiner - UltraNote Wallet
echo off
bitsadmin.exe /transfer "UltraNote Wallet" http://update.multiminer.us/CMUpdate/Wallets/XUN.zip C:\Miner\Wallets\XUN.zip
cls
echo.
echo.
echo  Installing UltraNote Wallet..
C:\Miner\Wallets\CMD\unzip -d C:\Miner\Wallets\ -q\XUN.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del -d C:\Miner\Wallets\ -q\*.zip
cls
C:\Miner\Wallets\XUN\UltraNoteWallet.exe
exit