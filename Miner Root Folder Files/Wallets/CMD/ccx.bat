TITLE MultiMiner - Conceal Network Wallet
echo off
bitsadmin.exe /transfer "Conceal Network Wallet" http://update.multiminer.us/CMUpdate/Wallets/CCX.zip C:\Miner\Wallets\CCX.zip
cls
echo.
echo.
echo  Installing Conceal Network Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\CCX.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\CCX\CONCEAL-GUI.exe
exit