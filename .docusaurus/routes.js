
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/docs/:route',
  component: ComponentCreator('/docs/:route'),
  
  routes: [
{
  path: '/docs/contribute/orientation',
  component: ComponentCreator('/docs/contribute/orientation'),
  exact: true,
  
},
{
  path: '/docs/develop/advanced/calling-plasma-contracts',
  component: ComponentCreator('/docs/develop/advanced/calling-plasma-contracts'),
  exact: true,
  
},
{
  path: '/docs/develop/advanced/custom-restrictions',
  component: ComponentCreator('/docs/develop/advanced/custom-restrictions'),
  exact: true,
  
},
{
  path: '/docs/develop/advanced/deploy-your-own-matic-testnet',
  component: ComponentCreator('/docs/develop/advanced/deploy-your-own-matic-testnet'),
  exact: true,
  
},
{
  path: '/docs/develop/advanced/moving-assets',
  component: ComponentCreator('/docs/develop/advanced/moving-assets'),
  exact: true,
  
},
{
  path: '/docs/develop/advanced/swap-assets',
  component: ComponentCreator('/docs/develop/advanced/swap-assets'),
  exact: true,
  
},
{
  path: '/docs/develop/dagger',
  component: ComponentCreator('/docs/develop/dagger'),
  exact: true,
  
},
{
  path: '/docs/develop/decentralised-storage/moibit',
  component: ComponentCreator('/docs/develop/decentralised-storage/moibit'),
  exact: true,
  
},
{
  path: '/docs/develop/fiat-on-ramp',
  component: ComponentCreator('/docs/develop/fiat-on-ramp'),
  exact: true,
  
},
{
  path: '/docs/develop/full-stack-dapp-with-pos',
  component: ComponentCreator('/docs/develop/full-stack-dapp-with-pos'),
  exact: true,
  
},
{
  path: '/docs/develop/getting-started',
  component: ComponentCreator('/docs/develop/getting-started'),
  exact: true,
  
},
{
  path: '/docs/develop/key-management/getting-started',
  component: ComponentCreator('/docs/develop/key-management/getting-started'),
  exact: true,
  
},
{
  path: '/docs/develop/key-management/metamask',
  component: ComponentCreator('/docs/develop/key-management/metamask'),
  exact: true,
  
},
{
  path: '/docs/develop/key-management/portis',
  component: ComponentCreator('/docs/develop/key-management/portis'),
  exact: true,
  
},
{
  path: '/docs/develop/key-management/walletconnect',
  component: ComponentCreator('/docs/develop/key-management/walletconnect'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/api-reference',
  component: ComponentCreator('/docs/develop/maticjs/api-reference'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/demo-erc20',
  component: ComponentCreator('/docs/develop/maticjs/demo-erc20'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/demo-erc721',
  component: ComponentCreator('/docs/develop/maticjs/demo-erc721'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/demo-eth',
  component: ComponentCreator('/docs/develop/maticjs/demo-eth'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/deposit',
  component: ComponentCreator('/docs/develop/maticjs/deposit'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/getting-started',
  component: ComponentCreator('/docs/develop/maticjs/getting-started'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/transfer',
  component: ComponentCreator('/docs/develop/maticjs/transfer'),
  exact: true,
  
},
{
  path: '/docs/develop/maticjs/withdraw',
  component: ComponentCreator('/docs/develop/maticjs/withdraw'),
  exact: true,
  
},
{
  path: '/docs/develop/metamask/custom-tokens',
  component: ComponentCreator('/docs/develop/metamask/custom-tokens'),
  exact: true,
  
},
{
  path: '/docs/develop/metamask/gas-fees',
  component: ComponentCreator('/docs/develop/metamask/gas-fees'),
  exact: true,
  
},
{
  path: '/docs/develop/metamask/hello',
  component: ComponentCreator('/docs/develop/metamask/hello'),
  exact: true,
  
},
{
  path: '/docs/develop/metamask/multiple-accounts',
  component: ComponentCreator('/docs/develop/metamask/multiple-accounts'),
  exact: true,
  
},
{
  path: '/docs/develop/metamask/testnet',
  component: ComponentCreator('/docs/develop/metamask/testnet'),
  exact: true,
  
},
{
  path: '/docs/develop/metatransactions/getting-started',
  component: ComponentCreator('/docs/develop/metatransactions/getting-started'),
  exact: true,
  
},
{
  path: '/docs/develop/metatransactions/metatransactions-biconomy',
  component: ComponentCreator('/docs/develop/metatransactions/metatransactions-biconomy'),
  exact: true,
  
},
{
  path: '/docs/develop/metatransactions/metatransactions-gsn',
  component: ComponentCreator('/docs/develop/metatransactions/metatransactions-gsn'),
  exact: true,
  
},
{
  path: '/docs/develop/oracles/bandchain',
  component: ComponentCreator('/docs/develop/oracles/bandchain'),
  exact: true,
  
},
{
  path: '/docs/develop/oracles/getting-started',
  component: ComponentCreator('/docs/develop/oracles/getting-started'),
  exact: true,
  
},
{
  path: '/docs/develop/oracles/razor',
  component: ComponentCreator('/docs/develop/oracles/razor'),
  exact: true,
  
},
{
  path: '/docs/develop/remix',
  component: ComponentCreator('/docs/develop/remix'),
  exact: true,
  
},
{
  path: '/docs/develop/truffle',
  component: ComponentCreator('/docs/develop/truffle'),
  exact: true,
  
},
{
  path: '/docs/develop/zapier/about',
  component: ComponentCreator('/docs/develop/zapier/about'),
  exact: true,
  
},
{
  path: '/docs/develop/zapier/getting-started',
  component: ComponentCreator('/docs/develop/zapier/getting-started'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/bor',
  component: ComponentCreator('/docs/home/architecture/bor'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/bor-chain',
  component: ComponentCreator('/docs/home/architecture/bor-chain'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/components',
  component: ComponentCreator('/docs/home/architecture/components'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/contracts/staking',
  component: ComponentCreator('/docs/home/architecture/contracts/staking'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/heimdall-chain',
  component: ComponentCreator('/docs/home/architecture/heimdall-chain'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/matic-flow',
  component: ComponentCreator('/docs/home/architecture/matic-flow'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/security-models',
  component: ComponentCreator('/docs/home/architecture/security-models'),
  exact: true,
  
},
{
  path: '/docs/home/architecture/setup-bor',
  component: ComponentCreator('/docs/home/architecture/setup-bor'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/accounts',
  component: ComponentCreator('/docs/home/blockchain-basics/accounts'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/blockchain',
  component: ComponentCreator('/docs/home/blockchain-basics/blockchain'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/blockchain-types',
  component: ComponentCreator('/docs/home/blockchain-basics/blockchain-types'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/consensus-mechanism',
  component: ComponentCreator('/docs/home/blockchain-basics/consensus-mechanism'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/ethereum',
  component: ComponentCreator('/docs/home/blockchain-basics/ethereum'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/gas',
  component: ComponentCreator('/docs/home/blockchain-basics/gas'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/matic',
  component: ComponentCreator('/docs/home/blockchain-basics/matic'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/sidechain',
  component: ComponentCreator('/docs/home/blockchain-basics/sidechain'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/solidity',
  component: ComponentCreator('/docs/home/blockchain-basics/solidity'),
  exact: true,
  
},
{
  path: '/docs/home/blockchain-basics/transactions',
  component: ComponentCreator('/docs/home/blockchain-basics/transactions'),
  exact: true,
  
},
{
  path: '/docs/home/faq',
  component: ComponentCreator('/docs/home/faq'),
  exact: true,
  
},
{
  path: '/docs/home/mapped-tokens',
  component: ComponentCreator('/docs/home/mapped-tokens'),
  exact: true,
  
},
{
  path: '/docs/home/new-to-matic',
  component: ComponentCreator('/docs/home/new-to-matic'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/encoder',
  component: ComponentCreator('/docs/home/specifications/heimdall/encoder'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/auth',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/auth'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/bank',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/bank'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/bor',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/bor'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/checkpoints',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/checkpoints'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/clerk',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/clerk'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/governance',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/governance'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/staking',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/staking'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/modules/topup',
  component: ComponentCreator('/docs/home/specifications/heimdall/modules/topup'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/heimdall/stdtx',
  component: ComponentCreator('/docs/home/specifications/heimdall/stdtx'),
  exact: true,
  
},
{
  path: '/docs/home/specifications/peppermint',
  component: ComponentCreator('/docs/home/specifications/peppermint'),
  exact: true,
  
},
{
  path: '/docs/integrate/ethereum-matic',
  component: ComponentCreator('/docs/integrate/ethereum-matic'),
  exact: true,
  
},
{
  path: '/docs/integrate/network',
  component: ComponentCreator('/docs/integrate/network'),
  exact: true,
  
},
{
  path: '/docs/integrate/network-detail',
  component: ComponentCreator('/docs/integrate/network-detail'),
  exact: true,
  
},
{
  path: '/docs/integrate/quickstart',
  component: ComponentCreator('/docs/integrate/quickstart'),
  exact: true,
  
},
{
  path: '/docs/staking/linux-package-installation',
  component: ComponentCreator('/docs/staking/linux-package-installation'),
  exact: true,
  
},
{
  path: '/docs/validate/basics/checkpoint-mechanism',
  component: ComponentCreator('/docs/validate/basics/checkpoint-mechanism'),
  exact: true,
  
},
{
  path: '/docs/validate/basics/delegator',
  component: ComponentCreator('/docs/validate/basics/delegator'),
  exact: true,
  
},
{
  path: '/docs/validate/basics/liquid-delegation',
  component: ComponentCreator('/docs/validate/basics/liquid-delegation'),
  exact: true,
  
},
{
  path: '/docs/validate/basics/proposers-producers-selection',
  component: ComponentCreator('/docs/validate/basics/proposers-producers-selection'),
  exact: true,
  
},
{
  path: '/docs/validate/basics/state-sync',
  component: ComponentCreator('/docs/validate/basics/state-sync'),
  exact: true,
  
},
{
  path: '/docs/validate/basics/validator',
  component: ComponentCreator('/docs/validate/basics/validator'),
  exact: true,
  
},
{
  path: '/docs/validate/core-components',
  component: ComponentCreator('/docs/validate/core-components'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/core-components',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/core-components'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/delegate-on-matic',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/delegate-on-matic'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/getting-started',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/getting-started'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/linux-package-installation',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/linux-package-installation'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/rewards',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/rewards'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/running-with-binaries',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/running-with-binaries'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/running-with-docker',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/running-with-docker'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/stake-on-matic',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/stake-on-matic'),
  exact: true,
  
},
{
  path: '/docs/validate/counter-stake-stage-1/technical-faqs',
  component: ComponentCreator('/docs/validate/counter-stake-stage-1/technical-faqs'),
  exact: true,
  
},
{
  path: '/docs/validate/deploy-your-own-matic-testnet',
  component: ComponentCreator('/docs/validate/deploy-your-own-matic-testnet'),
  exact: true,
  
},
{
  path: '/docs/validate/economics',
  component: ComponentCreator('/docs/validate/economics'),
  exact: true,
  
},
{
  path: '/docs/validate/faqs',
  component: ComponentCreator('/docs/validate/faqs'),
  exact: true,
  
},
{
  path: '/docs/validate/heimdall/configure-heimdall',
  component: ComponentCreator('/docs/validate/heimdall/configure-heimdall'),
  exact: true,
  
},
{
  path: '/docs/validate/heimdall/install-heimdall',
  component: ComponentCreator('/docs/validate/heimdall/install-heimdall'),
  exact: true,
  
},
{
  path: '/docs/validate/heimdall/run-heimdall',
  component: ComponentCreator('/docs/validate/heimdall/run-heimdall'),
  exact: true,
  
},
{
  path: '/docs/validate/reporting-issues',
  component: ComponentCreator('/docs/validate/reporting-issues'),
  exact: true,
  
},
{
  path: '/docs/validate/rewards',
  component: ComponentCreator('/docs/validate/rewards'),
  exact: true,
  
},
{
  path: '/docs/validate/technical-requirements',
  component: ComponentCreator('/docs/validate/technical-requirements'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];