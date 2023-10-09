# MINING MAESTROS 
#LEGAL MINER
Mining Maestros Chatbot
Mining Maestros is a chatbot built using deep learning techniques. The chatbot is trained on a dataset containing categories (intents), patterns, and responses. A special recurrent neural network (LSTM) is used to classify which category the user's message belongs to, and then a random response is given from the list of responses.
Getting Started
To use the Mining Maestros chatbot, follow these steps:
Download all the files.
Open Command Prompt.
Navigate to the folder where your files are present.
Make sure your system has the following modules installed: tensorflow, keras, nltk, pickle. If not, then install the modules using the command - pip install module_name. If your system already has the module, it will show "Requirement already satisfied".
Train and create the model by executing the "train_chatbot.py" file using the following command - python train_chatbot.py. If the training is successful, it will show "model created".
To open the GUI window and start a conversation with the chatbot, execute the "chatgui.py" file using the following command - python chatgui.py. It will open the GUI window.
Write your text in the section on the right of the send button and click on "Send". Enjoy the responses!
Error Guide
If you encounter an error while executing the file "train_chatbot.py" such as "ImportError: cannot import name 'tf_utils'", uninstall keras using the command - pip uninstall keras, then reinstall keras using the command - pip install keras==2.2.0. Try executing the file again.
Remember that the README file is essential for your project because it is often the first item a visitor will see when visiting your repository. It should be fairly brief but detailed and make your project stand out from a bunch of others.
