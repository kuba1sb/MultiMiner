TITLE MultiMiner - Myztic Wallet
echo off
bitsadmin.exe /transfer "Myztic Wallet" http://update.multiminer.us/CMUpdate/Wallets/MZT.zip C:\Miner\Wallets\MZT.zip
cls
echo.
echo.
echo  Installing Myztic Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\MZT.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\MZT\myztic-wallet-gui.exe
exit