TITLE MultiMiner - Haven Wallet
echo off
bitsadmin.exe /transfer "Haven Wallet" http://update.multiminer.us/CMUpdate/Wallets/XHV.zip C:\Miner\Wallets\XHV.zip
cls
echo.
echo.
echo  Installing Haven Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\XHV.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\XHV\haven-wallet-gui.exe
exit