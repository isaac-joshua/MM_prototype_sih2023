# Mining Maestros Chatbot

Mining Maestros is a chatbot built using deep learning techniques. The chatbot is trained on a dataset containing categories (intents), patterns, and responses. A special recurrent neural network (LSTM) is used to classify which category the user's message belongs to, and then a random response is given from the list of responses.

## Getting Started

To use the Mining Maestros chatbot, follow these steps:

1. **Download all the files.**

2. **Open Command Prompt.**

3. **Navigate to the folder where your files are present.**

4. **Install required modules:**

   Make sure your system has the following modules installed: tensorflow, keras, nltk, pickle. If not, then install the modules using the command:

   ```bash
   pip install module_name
   
5. **Run the chatbot:**

   Once the modules are installed, you can run the chatbot using the command:
   ``` bash
   python chatbot.py
   This will start the chatbot, and you can begin interacting with it.

## Training the Chatbot

If you want to train the chatbot on your own dataset, follow these steps:

1. **Prepare your dataset:**

   Your dataset should be in a CSV format with three columns: 'Pattern', 'Intent', and 'Response'. Make sure to preprocess your data by removing any unnecessary characters, punctuation, or symbols.

2. **Train the chatbot:**

   To train the chatbot, run the command:
   ``` bash
   python train.py

  This will train the chatbot on your dataset and save the trained model.

3. **Test the chatbot:**

   After training the chatbot, you can test its performance by running the command:
   ```bash
   python test.py
   
   This will start the chatbot and allow you to interact with it.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request. Please make sure to follow the coding guidelines and style of the project.
   
   
   
