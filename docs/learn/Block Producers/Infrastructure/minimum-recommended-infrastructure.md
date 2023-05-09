---
title: 'Minimum Infrastructure'
deploy: ['staging', 'mainnet']
outline: [0,4]
order: -98
---

# Miniumum Infrastructure

It is the Block Producer’s prerogative whether to run their servers on their own hardware or through a bare-metal service like Amazon AWS or Google Cloud.

**Minimum required nodes**

-   1 producer node    
-   2 seed / API nodes
-   1 producer node as a backup
    

**A note on RAM**

If you spawn too many API nodes you can potentially crash the environment by simply running out of **RAM**. Please account for RAM usage when you spawn additional API nodes under the same environment.

### Intel Platform Machines

| Node Type             | Number of Nodes | Server Info                                                                                                                                                             |
| --------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API / Seed Node       | 2               | Intel Xeon-E 2288G / 16t 3.7GHz - 5Ghz, 64GB DDR4 ECC 2666MHz RAM, 2 x 960GB SSD NVMe Soft RAID, Public Network 500Mbps unmetered (burst 1Gbs), Private Network 500Mbps |
| Producing Node        | 1               | Intel Xeon-E 2274G / 8t 4GHz - 4.7Ghz, 64GB DDR4 ECC 2666MHz RAM, 2 x 960GB SSD NVMe Soft RAID, Public Network 500Mbps unmetered (burst 1Gbs), Private Network 500Mbps  |
| Backup Producing Node | 1               | Intel Xeon-E 2274G / 8t 4GHz - 4.7Ghz, 64GB DDR4 ECC 2666MHz RAM, 2 x 960GB SSD NVMe Soft RAID, Public Network 500Mbps unmetered (burst 1Gbs), Private Network 500Mbps  |

## Networking details

Certain ports need to be opened on your instance’s firewall.

-  SSH 22
    
-  HTTP 80
    
-  HTTPS 443
    
-  NODEOS 9876
    
-  WIREGUARD 45888
    

Only your API / Seed Node should have an exposed endpoint to the outside world. This is to ensure your producing nodes will continue producing regardless of network load.

**A note on IP addresses**

Ultra recommends requires all Block Producers use static external IPs for all instances.