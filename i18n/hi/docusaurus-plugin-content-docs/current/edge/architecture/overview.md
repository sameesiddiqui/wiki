---
id: overview
title: आर्किटेक्चर ओवरव्यू
sidebar_label: Overview
description: पॉलीगॉन एज के आर्किटेक्चर का परिचय.
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - modular
  - layer
  - libp2p
  - extensible
---

हमने *मॉडुलर* सॉफ्टवेयर बनाने के आइडिया पर काम करना शुरू कर दिया है.

इसमें ऐसा कुछ है जो पॉलीगॉन एज के लगभग सभी पार्ट में मौजूद है. नीचे आप बिल्ट आर्किटेक्चर और इसकी लेयरिंग
के बारे संक्षिप्त जानकारी प्राप्त करेंगे.

## पॉलीगॉन एज लेयरिंग {#polygon-edge-layering}

![पॉलीगॉन एज आर्किटेक्चर](/img/edge/Architecture.jpg)

## Libp2p {#libp2p}

यह बेस नेटवर्किंग लेयर पर शुरू होता है, जो **libp2p** का इस्तेमाल करता है. हमने इस टेक्नोलॉजी का इस्तेमाल करने का फैसला किया क्योंकि
यह पॉलीगॉन एज के डिजाइनिंग फ़िलॉसफ़ीज़ में फिट बैठती है. Libp2p है:

- मॉडुलर
- एक्सटेंसिबल
- फास्ट

सबसे महत्वपूर्ण कि यह अधिक एडवांस फ़ीचर के लिए एक अच्छी शुरूआत प्रदान करता है, जो हम बाद में कवर करेंगे.


## सिंक्रनाइज़ेशन और सहमति {#synchronization-consensus}
सिंक्रनाइज़ेशन और सहमति प्रोटोकॉल को अलग करने से **कस्टम** सिंक और सहमति मैकेनिज्म के मॉड्यूलैरिटी और इम्प्लीमेंटेशन की अनुमति मिलती है - यह इस बात पर निर्भर करता है कि क्लाइंट कैसे रन किया जा रहा है.

पॉलीगॉन एज को ऑफ़-द-शेल्फ़ प्लगेबल सहमति अल्गोरिथम को ऑफ़र करने के लिए डिज़ाइन किया गया है.

समर्थित सहमति अल्गोरिथम की मौजूदा सूची:

* IBFT PoA
* IBFT PoS

## ब्लॉकचेन {#blockchain}
ब्लॉकचेन लेयर वह मुख्य लेयर है जो पॉलीगॉन एज सिस्टम में हर चीज का समन्वय करता है. इसे संबंधित *मॉड्यूल* सेक्शन में ठीक से कवर किया गया है.

## स्टेट {#state}
स्टेट इनर लेयर में स्टेट ट्रांजिशन लॉजिक होते हैं. यह इस बारे में है कि एक नया ब्लॉक शामिल करने से स्टेट कैसे बदल जाता है. इसे संबंधित *मॉड्यूल* सेक्शन में ठीक से कवर किया गया है.

## JSON RPC {#json-rpc}
JSON RPC लेयर एक API लेयर होती है जिसका इस्तमाल dapp डेवलपर्स ब्लॉकचेन के साथ इंटरैक्ट करने के लिए करते हैं. इसे संबंधित *मॉड्यूल* सेक्शन में ठीक से कवर किया गया है.

## TxPool {#txpool}
TxPool लेयर ट्रांज़ैक्शन पूल का प्रतिनिधित्व करती है और यह सिस्टम के अन्य मॉड्यूल के साथ ठीक से लिंक होती है, क्योंकि ट्रांज़ैक्शन को कई एंट्री पॉइंट से जोड़ा जा सकता है.

## GRPC {#grpc}
gRPC, या Google रिमोट प्रोसेस कॉल एक मजबूत ओपन-सोर्स RPC फ्रेमवर्क है जो गूगल ने शुरू में स्केलेबल और फास्ट API बनाने के लिए बनाई थी. GRPC लेयर ऑपरेटर इंटरैक्शन के लिए बहुत महत्वपूर्ण है. इसके माध्यम से, नोड ऑपरेटर एक आनंददायक UX प्रदान करके, क्लाइंट के साथ आसानी से इंटरैक्ट कर सकते हैं.