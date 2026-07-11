# Ydata-Vasc511

Ydata-Vasc511 is a research resource for evaluating multimodal AI model performance in rare and complex cutaneous vascular diseases. The public distribution is score-only and is designed to support recalculation of the aggregate results reported in the associated manuscript.

## Public Release

The current release is [v1.1.0](https://github.com/wang177777/Ydata-Vasc511/releases/tag/v1.1.0).

- Package: `Ydata-Vasc511_Final_Scoring_Materials_v1.1.0.zip`
- SHA-256: `52074ec5053acfdd7222b07042d6776b04a456f97856961c072d4a0060ae04a7`

The package contains:

- Supplementary Data S1 with final de-identified diagnostic and treatment score fields for 13,797 case-model-modality interactions.
- Both experts' final effectiveness and safety ratings and their arithmetic means.
- Prompt templates, scoring rubrics, and supplementary methods.
- Supplementary statistical tables and final analysis summaries.

Diagnostic codes are 10 for Top-1 correct, 5 for the reference diagnosis appearing only in the differential list, and 0 for missed diagnosis.

The public package does not contain model-output text, extracted diagnosis or treatment text, platform-history URLs or excerpts, third-party patient images, source-article figures, or full-text articles. It therefore supports statistical recalculation but not independent re-adjudication of the original text-to-score assignments.

## Copyright and Reuse

The study dataset was constructed from previously published case reports. Public availability of a case report does not automatically permit redistribution of its figures, full-text PDFs, publisher-formatted files, or patient images.

Third-party source materials remain governed by the copyright, license, and patient-consent terms of the original publications and publishers. This repository does not claim ownership of or relicense those materials.

## Privacy

The study used previously published case reports and did not involve new patient contact or access to identifiable medical records. No direct patient identifiers are included in the public score-only materials.

## Citation

If you use the score-only dataset, prompts, scoring rubrics, or analysis summaries, please cite the associated manuscript and this repository. Obtain and cite original case-report figures or full text from the source publications when needed.

## Medical Disclaimer

These materials are for research and model-evaluation purposes only. They do not provide medical advice, diagnosis, or treatment and should not replace professional clinical judgment.
