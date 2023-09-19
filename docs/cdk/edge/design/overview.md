---
id: overview
title: Architecture Overview
sidebar_label: Overview
description: "Introduction to the architecture of Edge."
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

The diagram below illustrates the major coomponents of Edge.

<div align="center">
  <img src="/img/edge/supernets-overview.excalidraw.png" alt="Edge architecture overview" width="850" />
</div>

## Components

The following table breaks down each of these components.

| Component | Description | Link |
| --- | --- | --- |
| libp2p | Provides the networking layer for Edge and is designed for peer-to-peer network architectures. | [libp2p overview](/docs/cdk/edge/design/libp2p.md) |
| Bridge | An in-built bridging mechanism enabled by PolyBFT that allows message passing between an Edge chain and another Proof-of-Stake blockchain without mapping. | [bridge overview](/docs/cdk/edge/design/bridge/overview.md) |
| Mempool | Enables multiple validators to aggregate their signatures to create a single, aggregated signature representing all validators in the pool. | [mempool overview](/docs/cdk/edge/design/mempool.md) |
| Consensus | PolyBFT serves as the consensus mechanism of Polygon Edge and consists of a consensus engine, IBFT 2.0, and a consensus protocol that includes the bridge, staking, and other utilities. | [PolyBFT overview](/docs/category/polybft-consensus) |
| Blockchain | Coordinates everything in the system, curates state transitions, and is responsible for state changes when a new block is added to the chain. | [blockchain overview](/docs/cdk/edge/design/blockchain.md) |
| Runtime (EVM) | Uses the EVM as the runtime environment for executing smart contracts. | [runtime overview](/docs/cdk/edge/design/runtime/overview.md) |
| TxPool | Represents the transaction pool, closely linked with other modules in the system. | [txpool overview](/docs/cdk/edge/design/txpool.md) |
| JSON-RPC | Facilitates interaction between dApp developers and the blockchain, allowing developers to issue JSON-RPC requests to an Edge node and receive responses. | [JSON-RPC overview](/docs/cdk/edge/design/jsonrpc.md) |
| gRPC | Essential for operator interactions, allowing node operators to interact with the client easily and providing a seamless user experience. | [gRPC overview](/docs/cdk/edge/design/grpc.md) |