TITLE MultiMiner - X-Cash Wallet
echo off
bitsadmin.exe /transfer "X-Cash Wallet" http://update.multiminer.us/CMUpdate/Wallets/XCA.zip C:\Miner\Wallets\XCA.zip
cls
echo.
echo.
echo  Installing Catalyst Wallet..
C:\Miner\Wallets\CMD\unzip C:\Miner\Wallets\XCA.zip -d C:\Miner\Wallets\ -q
echo.
echo.
echo  Cleaning Up..
del C:\Miner\Wallets\*.zip
cls
C:\Miner\Wallets\XCA\xca.bat
exit