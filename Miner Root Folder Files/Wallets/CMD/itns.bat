TITLE MultiMiner - Intense Coin Wallet
echo off
bitsadmin.exe /transfer "Intense Coin Wallet" http://update.multiminer.us/CMUpdate/Wallets/ITNS.zip C:\Miner\Wallets\ITNS.zip
cls
echo.
echo.
echo  Installing Intense Coin Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\ITNS.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\ITNS\itns.cmd
exit