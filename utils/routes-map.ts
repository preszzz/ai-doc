import {EachRoute} from "@/lib/routes-config";

const ROUTES: EachRoute[] = [
    {
        title: "Getting Started",
        href: "/getting-started",
        noLink: true,
        items: [
            { title: "Introduction", href: "/introduction" },
            {
                title: "Installation",
                href: "/installation",
            },
            { title: "Quick Start Guide", href: "/quick-start-guide" },
            {
                title: "Project Structure",
                href: "/project-structure",
            },
            {
                title: "Components",
                href: "/components",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
            { title: "Themes", href: "/themes" },
            {
                title: "Customize",
                href: "/customize",
            },
        ],
    },
    {
        title: "Math",
        href: "/math",
        noLink: true,
        items: [
            { title: "01 Linear Algebra", href: "/linear-algebra" },
            { title: "02 Calculus", href: "/calculus" },
            {
                title: "03 Statistics",
                href: "/statistics",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
        ],
    },
    {
        title: "Machine Learning",
        href: "/machine-learning",
        noLink: true,
        items: [
            {
                title: "Statistical Learning",
                href: "/statistical-learning",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
            {
                title: "Supervised Learning",
                href: "/supervised-learning",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
            {
                title: "Unsupervised Learning",
                href: "/unsupervised-learning",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
            {
                title: "Model Evaluation",
                href: "/model-evaluation",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
        ],
    },
    {
        title: "Deep Learning",
        href: "/deep-learning",
        noLink: true,
        items: [
            { title: "01 Foundational Concepts", href: "/foundational-concepts" },
            {
                title: "02 Neural Network Archs",
                href: "/neural-network-archs",
                items: [
                    { title: "FNN", href: "/fnn" },
                    { title: "CNN", href: "/cnn" },
                    { title: "RNN", href: "/rnn" },
                ],
            },
            { title: "03 Attention Mechanisms", href: "/attention-mechanisms", },
            { title: "04 Transformers", href: "/transformers", },
            { title: "05 Transfer Learning", href: "/transfer-learning", },
            {
                title: "06 Generative Models",
                href: "/generative-models",
                items: [
                    { title: "GANs", href: "/gans" },
                    { title: "VAEs", href: "/vaes" },
                ],
            },
            { title: "07 Computer Vision", href: "/computer-vision", },
        ],
    },
    {
        title: "Natural Language Processing",
        href: "/nlp",
        noLink: true,
        items: [
            { title: "Introduction", href: "/introduction" },
            {
                title: "Text Preprocessing",
                href: "/text-preprocessing",
                items: [
                    { title: "Tokenization", href: "/tokenization" },
                    { title: "Normalization", href: "/normalization" },
                    { title: "Stop Words Removal", href: "/stop-words-removal" },
                    { title: "N-grams and Patterns", href: "/ngrams-and-patterns" },
                    { title: "Spell Checking", href: "/spell-checking" }
                ],
            },
            {
                title: "Text Representation",
                href: "/text-representation",
                items: [
                    { title: "Bag of Words", href: "/bow" },
                    { title: "TF-IDF", href: "/tfidf" },
                    { title: "Embeddings", href: "/embeddings" },
                    { title: "Contextual Embeddings", href: "/contextual-embeddings" }
                ],
            },
            {
                title: "Core Tasks",
                href: "/core-tasks",
                items: [
                    { title: "Text Classification", href: "/text-classification" },
                    { title: "Named Entity Recognition", href: "/ner" },
                    { title: "Machine Translation", href: "/machine-translation" },
                    { title: "Text Summarization", href: "/text-summarization" },
                    { title: "Information Retrieval", href: "/information-retrieval" }
                ],
            },
            {
                title: "Advanced Techniques",
                href: "/advanced-techniques",
                items: [
                    { title: "Transformers", href: "/transformers" },
                    { title: "Fine-tuning", href: "/fine-tuning" },
                    { title: "RAG", href: "/rag" }
                ],
            },
            {
                title: "Unsupervised NLP",
                href: "/unsupervised-nlp",
                items: [
                    { title: "Topic Modeling", href: "/topic-modeling" },
                    { title: "Clustering", href: "/clustering" },
                    { title: "Dimensionality Reduction", href: "/dimensionality-reduction" }
                ],
            },
            { title: "Evaluation Metrics", href: "/evaluation-metrics" },
            {
                title: "Applications",
                href: "/applications",
                items: [
                    { title: "Chatbots", href: "/chatbots" },
                    { title: "Sentiment Analysis", href: "/sentiment-analysis" },
                    { title: "Recommendation Systems", href: "/recommendation-systems" },
                    { title: "Domain-specific NLP", href: "/domain-specific-nlp" }
                ],
            }
        ],
    },
    {
        title: "Reinforcement Learning",
        href: "/rl",
        noLink: true,
        items: [
            { title: "Introduction", href: "/introduction" },
            { title: "Installation", href: "/installation" },
            {
                title: "Components",
                href: "/components",
                items: [
                    { title: "Stepper", href: "/stepper" },
                    { title: "Tabs", href: "/tabs" },
                    { title: "Note", href: "/note" },
                    { title: "Code Block", href: "/code-block" },
                    { title: "Image & Link", href: "/image-link" },
                    { title: "Custom", href: "/custom" },
                ],
            },
        ],
    },
];

export default ROUTES