flowchart TB
    %% Layers of interoperability

    subgraph TECHNICAL_INTEROP["Technical interoperability (can systems talk?)"]
        T1["Network connectivity<br/>(TCP/IP, HTTPS, VPN)"]
        T2["APIs & protocols<br/>(REST, SOAP, MQTT, message queues)"]
        T3["Data formats<br/>(JSON, XML, CSV)"]
        T4["Identity & access<br/>(SSO, OAuth2, eIDAS2)"]
    end

    subgraph SEMANTIC_INTEROP["Semantic interoperability (do they understand the same meaning?)"]
        S1["Shared concepts & definitions<br/>(incident, asset, severity, risk…)"]
        S2["Ontologies & taxonomies<br/>(ENISA, DCAT-AP, domain models)"]
        S3["Metadata standards<br/>(Dublin Core, ISO 8601, code lists)"]
        S4["Data model alignment<br/>(field mappings, canonical models)"]
    end

    subgraph ORG_INTEROP["Organizational interoperability (do people & institutions act coherently?)"]
        O1["Shared objectives & mandates<br/>(e.g. NIS2, policies, strategies)"]
        O2["Roles, responsibilities, RACI<br/>(CSIRT, OES, providers, authorities)"]
        O3["Governance & processes<br/>(SOPs, SLAs, escalation paths)"]
        O4["Legal & regulatory alignment<br/>(contracts, MoUs, reporting duties)"]
    end

    %% Vertical dependency
    TECHNICAL_INTEROP --> SEMANTIC_INTEROP --> ORG_INTEROP

    %% Explanatory notes
    note right of TECHNICAL_INTEROP
      Ensures systems can exchange data.
      Focus: connectivity, interfaces, security.
    end

    note right of SEMANTIC_INTEROP
      Ensures exchanged data has the same meaning.
      Focus: vocabularies, models, mappings.
    end

    note right of ORG_INTEROP
      Ensures organizations can coordinate and act.
      Focus: governance, processes, compliance.
    end
