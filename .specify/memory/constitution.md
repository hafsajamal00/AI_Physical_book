<!--
Sync Impact Report:
Version change: N/A → 1.0.0
Added sections: All sections (new constitution)
Templates requiring updates: N/A (new file)
-->

# Project Constitution

## Project: AI-Authored Book with Embedded RAG Chatbot

**Project Name:** AI-Authored Book with Embedded RAG Chatbot
**Ratification Date:** 2025-12-23
**Last Amended Date:** 2025-12-23
**Constitution Version:** 1.0.0

---

## Core Principles

### 1. Spec-First Development
All development follows the Spec-Kit Plus methodology. No implementation occurs without a corresponding specification. This ensures traceability between requirements and implementation, enabling reproducible builds and maintainable architecture.

### 2. Zero Hallucination
The RAG chatbot MUST strictly answer questions based only on the book's content. Under no circumstances should the system generate information not present in the source material. If content is not found in the book, the system MUST respond with "Not found in book" or similar explicit statement.

### 3. Technical Clarity
All content must be written for technical readers with Flesch-Kincaid grade level 9-12. Explanations must be clear, precise, and free of ambiguity. No placeholder or unverifiable content is permitted in the final book.

### 4. Reproducible Builds
All components of the system must be fully reproducible. The Docusaurus book, FastAPI backend, and deployment process must be deterministic and repeatable from source code alone. No hard-coded secrets or environment-specific configurations allowed.

### 5. Modular Architecture
System components must be modular and maintainable. The Docusaurus frontend, FastAPI backend, Qdrant vector database, and Neon Postgres metadata database must be loosely coupled to enable independent development and testing.

### 6. Free-Tier Compatibility
All technology choices must remain within free-tier service limits. This constrains the selection of cloud services and ensures the project remains accessible to all contributors without financial barriers.

### 7. Deterministic Data Processing
Content indexing must be deterministic. Chunking and embedding processes must produce identical results for identical inputs, enabling reliable re-indexing when content changes.

### 8. Source Attribution
All RAG chatbot responses MUST include proper source citations linking back to the specific book content that supports the answer. This maintains transparency and enables readers to verify information.

---

## Technology Stack Standards

### Frontend (Docusaurus Book)
- Framework: Docusaurus
- Content Format: Markdown (MD/MDX)
- Deployment: GitHub Pages
- Accessibility: WCAG 2.1 AA compliance minimum
- Performance: Core Web Vitals optimized

### Backend (RAG System)
- Framework: FastAPI
- AI Provider: OpenAI Agents / ChatKit SDKs
- Vector Database: Qdrant Cloud (Free Tier)
- Metadata Database: Neon Serverless Postgres
- API Design: RESTful with OpenAPI documentation

### Data Management
- Content Chunking: Deterministic, reproducible algorithms
- Embedding Model: Consistent model version for reproducibility
- Metadata: Chapter, section, and URL tracking for all content
- Indexing: Automatic re-indexing on content changes

---

## Quality Standards

### Code Quality
- All code must include appropriate unit and integration tests
- Code coverage must remain above 80% for all components
- Static analysis tools must pass before merging
- Security scanning required for all dependencies

### Documentation
- All public APIs must be fully documented
- Deployment process must be documented step-by-step
- Architecture decisions must be recorded in ADRs
- User guides must be maintained with each release

### Testing
- Unit tests for all business logic
- Integration tests for all API endpoints
- End-to-end tests for critical user flows
- Performance tests for RAG response times

---

## Deployment Standards

### GitHub Pages (Frontend)
- Automated deployment via GitHub Actions
- Branch protection rules for main branch
- Preview deployments for pull requests
- CDN caching optimization

### Backend Infrastructure
- Containerized deployment (Docker)
- Environment-specific configuration via secrets
- Health check endpoints for monitoring
- Graceful degradation strategies

---

## Governance

### Amendment Process
This constitution may be amended through:
1. A pull request proposing the change
2. Review by at least two project maintainers
3. Approval from the project lead
4. Update to version number according to semantic versioning

### Versioning Policy
- MAJOR: Backward incompatible changes to core principles
- MINOR: New principles or significant expansions
- PATCH: Clarifications, corrections, or non-semantic refinements

### Compliance Review
All major releases must include a constitution compliance review to ensure adherence to all principles and standards.

### Rationale
This constitution ensures the project maintains its core values of technical excellence, reproducibility, and accuracy while enabling collaborative development. The principles are designed to be testable and enforceable, providing clear guidance for implementation decisions.

---

## Success Criteria

### Primary Objectives
- ✅ Book deployed and accessible via GitHub Pages
- ✅ RAG chatbot embedded and fully functional
- ✅ Answers strictly grounded in book content with zero hallucination
- ✅ Complete traceability from specifications to implementation
- ✅ Source citations provided for all RAG responses
- ✅ Free-tier service compatibility maintained
- ✅ Reproducible build and deployment processes

### Acceptance Tests
1. Book content is accessible via GitHub Pages
2. RAG chatbot responds to queries with proper citations
3. RAG chatbot returns "Not found in book" for out-of-scope queries
4. Build process completes successfully from source
5. All tests pass in CI environment
6. Performance benchmarks meet requirements