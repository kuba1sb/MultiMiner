TITLE MultiMiner - TycheCash Wallet
echo off
bitsadmin.exe /transfer "TycheCash Wallet" http://update.multiminer.us/CMUpdate/Wallets/TYCHE.zip C:\Miner\Wallets\TYCHE.zip
cls
echo.
echo.
echo  Installing TycheCash Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\TYCHE.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\TYCHE\TycheCashGUI.exe
exit